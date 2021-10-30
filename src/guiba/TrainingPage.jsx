
   
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import TextField from '@material-ui/core/TextField';
import Select from 'react-select';
import { axiosGet, axiosPost, axiosPatch, axiosDelete } from '../../global/globalFunc';
import './style.css';

function TrainingPage() {
  const [modalIsOpen, setModalIsOpen ] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen ] = useState(false);
  const [modalExcludeIsOpen, setModalExcludeIsOpen ] = useState(false);
  const [newTraining, setNewTraining] = useState({});
  const [selectedTraining, setSelectedTraining] = useState({});
  const [trainings, setTrainings] = useState([]);
  const [tags, setTags] = useState([]);
  const [facilitators, setFacilitators] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axiosGet(`/events`, ({ data }) => {
      setTrainings(data.map((training, i) => ({
        ...training,
        tags: training.tags.map((tag) => ({ value: tag.id, label: tag.name })),
        facilitators: training.facilitators.map((facilitator) => ({ value: facilitator.id, label: facilitator.name }))
      })))
    });
    axiosGet(`/tags`, ({ data }) => {
      setTags(data.map((tag) => ({
        value: tag.id, label: tag.name 
      })));
    });
    axiosGet(`/facilitators`, ({ data }) => {
      setFacilitators(data.map((facilitator) => ({
        value: facilitator.id, label: facilitator.name 
      })));
    });
  }, [update]);

  const submitFunc = (e, body, isPost = false) => {
    e.preventDefault();
    const id = body.id;

    const formatedBody = {
      ...body,
      facilitators: body.facilitators.map((i) => ({ id: i.value })),
      tags: body.tags.map((i) => ({ id: i.value }))
    }

    delete formatTraining.id;
    
    if (!isPost) {
      axiosPatch(`/events/${id}`, formatedBody, () => setUpdate(!update));
      setModalEditIsOpen(false);
    } else {
      axiosPost(`/events`, formatedBody, () => setUpdate(!update))
      setModalIsOpen(false);
    }
  }

  const deleteFunc = (body) => {
    axiosDelete(`/events/${body.id}`, () => setUpdate(!update));
    setModalExcludeIsOpen(false)
  }

  const onChangeTraining = (e, field, training = selectedTraining, setTraining = setSelectedTraining) => {
    const newObject = {
      ...training,
      [field]: e.target.value,
    }
    setTraining(newObject);
  }

  const formatTraining = (training) => {
    return setSelectedTraining({
      id: training.id,
      title: training.title,
      description: training.description,
      facilitators: training.facilitators,
      tags: training.tags,
      date: training.date,
      link: training.link,
      hour: training.hour,
    })
  }

  return (
    <>
      <Modal className="modal" isOpen = {modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose ={()=> setModalIsOpen(false) }>   
        <div className="modal__overlay" />
        <form className="modal__box">
          <TextField id="standard-basic" label="Titulo" value={newTraining?.title} onChange={(e) => onChangeTraining(e, 'title', newTraining, setNewTraining)} />
          <Select
            options ={tags}
            placeholder = "Selecione a(s) subárea(s)"              
            isSearchable
            value={newTraining?.tags}
            onChange={(currentValue) => setNewTraining({...newTraining, tags: currentValue})}
            autoFocus
            isMulti
            className='react-select-subarea'
          />
          <Select
            options ={facilitators}
            placeholder = "Selecione a(s) pessoa(s) organizadora(s)"              
            isSearchable
            value={newTraining?.facilitators}
            onChange={(currentValue) => setNewTraining({...newTraining, facilitators: currentValue})}
            autoFocus
            isMulti
            className='react-select-subarea'
          />
          <TextField id="standard-basic" label="Descrição" value={newTraining?.description} onChange={(e) => onChangeTraining(e, 'description', newTraining, setNewTraining)} />
          <TextField id="standard-basic" label="Link" value={newTraining?.link} onChange={(e) => onChangeTraining(e, 'link', newTraining, setNewTraining)} />
          <div className="date-hour-container">
            <TextField id="standard-basic" label="Data" value={newTraining?.date} onChange={(e) => onChangeTraining(e, 'date', newTraining, setNewTraining)} />
            <TextField id="standard-basic" className="hour-field" label="Hora" value={newTraining?.hour} onChange={(e) => onChangeTraining(e, 'hour', newTraining, setNewTraining)} />
          </div>
          <div className="footer-modal">
            < button className="edit-button" onClick={() => setModalIsOpen(false)}>Cancelar</button>
            < button className="edit-button" onClick={(e) => submitFunc(e, newTraining, true)}>Adicionar</button>
          </div> 
        </form>
      </Modal>
      <Modal className="modal" isOpen = {modalEditIsOpen} shouldCloseOnOverlayClick={false} onRequestClose ={()=> setModalEditIsOpen(false) }>   
        <div className="modal__overlay" />
        <form className="modal__box">
          <TextField id="standard-basic" label="Titulo" value={selectedTraining?.title} onChange={(e) => onChangeTraining(e, 'title')} />
          <Select
            options ={tags}
            placeholder = "Selecione a(s) subárea(s)"              
            isSearchable
            value={selectedTraining?.tags}
            onChange={(currentValue) => setSelectedTraining({...selectedTraining, tags: currentValue})}
            autoFocus
            isMulti
            className='react-select-subarea'
          />
          <Select
            options ={facilitators}
            placeholder = "Selecione a(s) pessoa(s) organizadora(s)"              
            isSearchable
            value={selectedTraining?.facilitators}
            onChange={(currentValue) => setSelectedTraining({...selectedTraining, facilitators: currentValue})}
            autoFocus
            isMulti
            className='react-select-subarea'
          />
          <TextField id="standard-basic" label="Descrição" value={selectedTraining?.description} onChange={(e) => onChangeTraining(e, 'description')} />
          <TextField id="standard-basic" label="Link" value={selectedTraining?.link} onChange={(e) => onChangeTraining(e, 'link')} />
          <div className="date-hour-container">
            <TextField id="standard-basic" label="Data" value={selectedTraining?.date} onChange={(e) => onChangeTraining(e, 'date')} />
            <TextField id="standard-basic" className="hour-field" label="Hora" value={selectedTraining?.hour} onChange={(e) => onChangeTraining(e, 'hour')} />
          </div>
          <div className="footer-modal">
            < button className="edit-button" onClick={() => setModalEditIsOpen(false)}>Cancelar</button>
            < button className="edit-button" onClick={(e) => submitFunc(e, selectedTraining)}>Salvar</button>
          </div> 
        </form>
      </Modal>
      <Modal className="modal" isOpen = {modalExcludeIsOpen} shouldCloseOnOverlayClick={false} onRequestClose ={()=> setModalExcludeIsOpen(false) }>   
        <div className="modal__overlay" />
        <div className="modal__box">
          <p>{`Tem certeza que deseja excluir "${selectedTraining?.title}"?`}</p>
          <div className="modal__closed" align='center' >
            < button className="button" onClick={() => deleteFunc(selectedTraining)} > Sim </button>
            < button className="button" onClick={() => setModalExcludeIsOpen(false)} > Não </button>
          </div>  
        </div>
      </Modal>
      
      <TableContainer className="table-header">
        <p>Treinamentos</p>
        <Plus onClick = {() => setModalIsOpen(true)} className="carregar-dados" />
      </TableContainer>
        <TableContainer className="table">
        <Table className="training-table-struct">
              <TableHead className="MuiTableCell-head">
                  <TableCell align="left">Título</TableCell>
                  <TableCell align="left">Subáreas</TableCell>
                  <TableCell align="left">Responsável</TableCell>
                  <TableCell align="left">Data</TableCell>
                  <TableCell align="left">Hora</TableCell>
                  <TableCell align="left">Descrição</TableCell>
                  <TableCell align="center">Opções</TableCell>
              </TableHead>
              {trainings.map((i) => (
              <TableRow className="MuiTableRow-root">
                  <TableCell align="left">{i.title}</TableCell>
                  {i?.tags.map((tag) => (
                    <TableCell key={tag.value} align="left">
                      <button className="tag-style">{tag.label}</button>
                    </TableCell>
                  ))}
                  <TableCell align="left">
                  {i?.facilitators.map((facilitator, index) => {
                    if ((index === i?.facilitators.length - 1)) {
                      return facilitator.label
                    } else {
                      return `${facilitator.label}, `
                    }
                  })}
                  </TableCell>
                  <TableCell align="left">{i.date}</TableCell>
                  <TableCell align="left">{i.hour}</TableCell>
                  <TableCell align="left">{i.description}</TableCell>
                  <TableCell align="center">
                    <button onClick = {() => { formatTraining(i); setModalEditIsOpen(true) }} className="opcoes">Editar</button>
                    <button onClick = {() => { formatTraining(i); setModalExcludeIsOpen(true) }} className="opcoes">Excluir</button>
                  </TableCell>
              </TableRow>
              ))}
            </Table>
        </TableContainer>
    </>
  );
}
export default TrainingPage;
