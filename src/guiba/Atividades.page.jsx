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

function AtividadesPage() {
  const [modalIsOpen, setModalIsOpen ] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen ] = useState(false);
  const [modalExcludeIsOpen, setModalExcludeIsOpen ] = useState(false);
  const [newChallenge, setNewChallenge] = useState({});
  const [selectedChallenge, setSelectedChallenge] = useState({});
  const [challenges, setChallenges] = useState([]);
  const [tags, setTags] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axiosGet(`/challenges`, ({ data }) => {
      setChallenges(data.map((challenge, i) => ({
        ...challenge,
        tags: challenge.tags.map((tag) => ({ value: tag.id, label: tag.name }))
      })))
    });
    axiosGet(`/tags`, ({ data }) => {
      setTags(data.map((tag) => ({
        value: tag.id, label: tag.name 
      })));
    });
  }, [update]);

  const submitFunc = (e, body, isPost = false) => {
    e.preventDefault();
    if (!isPost) {
      axiosPatch(`/challenges/${body.id}`, { ...body, tags: body.tags.map((i) => ({ id: i.value })) }, () => setUpdate(!update));
      setModalEditIsOpen(false);
    } else {
      axiosPost(`/challenges`, { ...body, tags: body.tags.map((i) => ({ id: i.value })) }, () => setUpdate(!update))
      setModalIsOpen(false);
    }
  }

  const deleteFunc = (body) => {
    axiosDelete(`/challenges/${body.id}`, () => setUpdate(!update));
    setModalExcludeIsOpen(false)
  }

  const onChangeChallenge = (e, field, challenge = selectedChallenge, setChallenge = setSelectedChallenge) => {
    const newObject = {
      ...challenge,
      [field]: e.target.value,
    }
    setChallenge(newObject);
  }

  return (
    <>
      <Modal className="modal" isOpen = {modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose ={()=> setModalIsOpen(false) }>   
        <div className="modal__overlay" />
        <form className="modal__box">
            <TextField id="standard-basic" label="Titulo" value={newChallenge?.title} onChange={(e) => onChangeChallenge(e, 'title', newChallenge, setNewChallenge)} />
            <Select
              options ={tags}
              placeholder = "Selecione a(s) subárea(s)"              
              isSearchable
              value={newChallenge?.tags}
              onChange={(currentValue) => setNewChallenge({...newChallenge, tags: currentValue})}
              autoFocus
              isMulti
              className='react-select-subarea'
            />
            <TextField id="standard-basic" label="Descrição" value={newChallenge?.description} onChange={(e) => onChangeChallenge(e, 'description', newChallenge, setNewChallenge)} />
            <TextField id="standard-basic" label="Deadline" value={newChallenge?.deadline} onChange={(e) => onChangeChallenge(e, 'deadline', newChallenge, setNewChallenge)} />
          <div className="footer-modal">
            < button className="edit-button" onClick={() => setModalIsOpen(false)}>Cancelar</button>
            < button className="edit-button" onClick={(e) => submitFunc(e, newChallenge, true)}>Adicionar</button>
          </div> 
        </form>
      </Modal>
      <Modal className="modal" isOpen = {modalEditIsOpen} shouldCloseOnOverlayClick={false} onRequestClose ={()=> setModalEditIsOpen(false) }>   
        <div className="modal__overlay" />
        <form className="modal__box">
          <TextField id="standard-basic" label="Titulo" value={selectedChallenge?.title} onChange={(e) => onChangeChallenge(e, 'title')} />
          <Select
            options ={tags}
            placeholder = "Selecione a(s) subárea(s)"              
            isSearchable
            value={selectedChallenge?.tags}
            onChange={(currentValue) => setSelectedChallenge({...selectedChallenge, tags: currentValue})}
            autoFocus
            isMulti
            className='react-select-subarea'
          />
          <TextField id="standard-basic" label="Descrição" value={selectedChallenge?.description} onChange={(e) => onChangeChallenge(e, 'description')} />
          <TextField id="standard-basic" label="Deadline" value={selectedChallenge?.deadline} onChange={(e) => onChangeChallenge(e, 'deadline')} />
          <div className="footer-modal">
            < button className="edit-button" onClick={() => setModalEditIsOpen(false)}>Cancelar</button>
            < button className="edit-button" onClick={(e) => submitFunc(e, selectedChallenge)}>Salvar</button>
          </div> 
        </form>
      </Modal>
      <Modal className="modal" isOpen = {modalExcludeIsOpen} shouldCloseOnOverlayClick={false} onRequestClose ={()=> setModalExcludeIsOpen(false) }>   
        <div className="modal__overlay" />
        <div className="modal__box">
          <p>{`Tem certeza que deseja excluir "${selectedChallenge?.title}"?`}</p>
          <div className="modal__closed" align='center' >
            < button className="button" onClick={() => deleteFunc(selectedChallenge)} > Sim </button>
            < button className="button" onClick={() => setModalExcludeIsOpen(false)} > Não </button>
          </div>  
        </div>
      </Modal>
      
      <TableContainer className="table-header">
        <p>Atividades</p>
        <Plus onClick = {() => setModalIsOpen(true)} className="carregar-dados" />
      </TableContainer>
        <TableContainer className="table">
          <Table className="trainees-table-struct">
            <TableHead className ="MuiTableCell-head">
                <TableCell align="left">Título</TableCell>
                <TableCell align="left">Subárea</TableCell>
                <TableCell align="left">Descrição</TableCell>
                <TableCell align="left">Deadline</TableCell>
                <TableCell align="center">Opções</TableCell>
            </TableHead>
            {challenges.map((i) => (
              <TableRow key={i.id} className="MuiTableRow-root">
                  <TableCell align="left">{i.title}</TableCell>
                  {i.tags.map((tag) => (
                    <TableCell key={tag.value} align="left">
                      <button className="tag-style">{tag.label}</button>
                    </TableCell>
                  ))}
                  <TableCell align="left">{i.description}</TableCell>
                  <TableCell align="left">{i.deadline}</TableCell>
                  <TableCell align="center">
                    <button onClick = {() => { setSelectedChallenge(i); setModalEditIsOpen(true) }} className="opcoes">Editar</button>
                    <button onClick = {() => { setSelectedChallenge(i); setModalExcludeIsOpen(true) }} className="opcoes">Excluir</button>
                  </TableCell>
              </TableRow>
            ))
            }
          </Table>
        </TableContainer>
    </>
  );
}
export default AtividadesPage;
