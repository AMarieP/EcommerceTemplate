import { makeStyles } from "@material-ui/core/styles";
// Styles for my product cards 

export default makeStyles(() => ({
    prodCard: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
      padding: 0,
      backgroundColor: 'inherit',
      overflow: 'hidden',
      },
      media: {
        height: '70vh',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },

}));
