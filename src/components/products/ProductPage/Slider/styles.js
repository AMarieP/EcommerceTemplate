import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
        display: 'flex',
        overflowY: 'hidden',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        height: '50vh',
        margin: 0,
        padding: 0,
  },
  content: {
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#354721'
  },
  image: {
    height: '100%',
  },
  buttons: {
    position: 'absolute',
    display: 'flex',
    top: '25%',
    width: '100%',
    justifyContent: 'space-between'
  },
  button:{
    // backgroundColor: '#354721',
    // borderRadius: '100%'
  }


}));