import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import Select from 'react-select';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './style.css';

const optionsCategory = [
  {value:'geral', label:'Geral'},
  {value:'financeiro', label: 'Financeiro'},
  {value:'comercial', label: 'Comercial'},
  {value:'marketing', label: 'Marketing'},
  {value:'pessoas', label: 'Pessoas'},
  {value:'desenvolvimento', label: 'Desenvolvimento'},
  {value:'design', label: 'Design'},
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function MateriaisPage() {
  const [modalIsOpen, setModalIsOpen ] = useState(false);
  const [modaleditIsOpen, setModalEditIsOpen ] = useState(false);
  const [modalExcludeIsOpen, setModalExcludeIsOpen ] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Modal className="modal_add" isOpen = {modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose ={()=> setModalIsOpen(false) }>   
      <div
          className="modal__overlay_add"
        />
        <div className="modal__box_add">
          <div className="modal__content_add">
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Título" />
            </form>
            <Select
                options = {optionsCategory}
                placeholder = "Selecione a(s) subárea(s)"              
                isSearchable
                isMulti
                autoFocus
                className = 'react-select-subarea'
             />
            
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Responsável" />
            </form>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Data" />
            </form> 
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Link" />
            </form>
          </div>
          <div className="footer-modal">
            < button className="cancel-modal" onClick={() => setModalIsOpen(false)} >Cancelar</button>
            < button className="add-data-trainees">Adicionar</button>
          </div> 
        </div>
      </Modal>
      <Modal className="modal_edit" isOpen = {modaleditIsOpen} shouldCloseOnOverlayClick={false} onRequestClose ={()=> setModalEditIsOpen(false) }>   
        <div
            className="modal__overlay_edit"
          />
          <div className="modal__box_edit">
            <div className="modal__title_edit">
              <text>Design emocional</text>
            </div>
            <div className="modal__content_edit">
              <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Título" />
              </form>
              <div className="modal__title_edit">
              <Select
                options = {optionsCategory}
                placeholder = "Selecione a(s) subárea(s)"              
                isSearchable
                isMulti
                autoFocus
                className = 'react-select-subarea'
              />

            </div>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Responsável" />
              </form>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Data" />
              </form> 
              <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Link" />
              </form>
            </div>
            <div className="footer-modal">
              < button className="cancel-modal" onClick={() => setModalEditIsOpen(false)} >Cancelar</button>
              < button className="add-data-trainees">Adicionar</button>
            </div> 
          </div>
      </Modal>
      <Modal className="modal_exclude" isOpen = {modalExcludeIsOpen} shouldCloseOnOverlayClick={false} onRequestClose ={()=> setModalExcludeIsOpen(false) }>   
        <div
              className="modal__overlay_exclude"
            />
          <div className="modal__box_exclude">
            <div className="modal__title_exclude">
              <text>Tem certeza que deseja excluir Design emocional?</text>
            </div>
            <div className="modal__closed_exclude" align='center' >
              < button className = "exclude-button" onClick={() => setModalExcludeIsOpen(false)} > Sim </button>
              < button className = "exclude-button" onClick={() => setModalExcludeIsOpen(false)} > Não </button>
            </div>  
          </div>
      </Modal>
      
      <TableContainer className="table-header">
        <a>Materiais</a>
        <Plus onClick = {() => setModalIsOpen(true)} className="carregar-dados" />
      </TableContainer>
          <TableContainer className="table">
            <Table className="trainees-table-struct">
              <TableHead className ="MuiTableCell-head">
                  <TableCell align="left">Título</TableCell>
                  <TableCell align="left">Subárea</TableCell>
                  <TableCell align="left">Responsável</TableCell>
                  <TableCell align="left">Data</TableCell>
                  <TableCell align="left">Link</TableCell>
                  <TableCell align="center">Opções</TableCell>
              </TableHead>
              <TableRow className="MuiTableRow-root">
                  <TableCell align="left">Design emocional</TableCell>
                  <TableCell align="left">
                    <button className="tag-design"> Design </button>
                  </TableCell>
                  <TableCell align="left"> Ayanne Gomes </TableCell>
                  <TableCell align="left">12/05</TableCell>
                  <TableCell align="left">piig.me/designemocional</TableCell>
                  <TableCell align="center">
                    <button  onClick = {() => setModalEditIsOpen(true)} className="opcoes">Editar</button>
                    <button onClick = {() => setModalExcludeIsOpen(true)} className="opcoes">Excluir</button>
                  </TableCell>
              </TableRow>
            </Table>
          </TableContainer>
        
    </>
  );
}
export default MateriaisPage;
