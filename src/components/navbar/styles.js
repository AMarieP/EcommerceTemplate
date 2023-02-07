import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    minHeight: '20vh',
    justifyContent: 'center',
    backgroundColor: '#FEFADF',
  },
  logo: {
    width: '16vw',
    marginRight: '3rem',
  },
  links: {
    fontSize: '.8rem',
    textDecoration: 'none',
    padding: '1.5rem 1.8rem',
    margin: '0rem 1rem',
    color: '#354721',
  },
  cart:{
    marginLeft: 'auto !important',
    padding: '0 0.5rem 0 0.5rem',
  },
  bottomNav:{
    position: 'fixed',
    top: 'auto',
    bottom: '0',
    left: '0',
    right: '0',
    width: '100vw',

  },
  bottomNavigation: {
    alignContent: 'center',
    justifyContent:'center',
    height: '15vh',
    backgroundColor: '#354721'

  },
  homeImage:{
    maxHeight: '15vh'
    
  }
  

}));