import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: '90%',
        justifyContent: 'center'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cardContent: {
        backgroundColor: '#202942',
        textAlign: 'center',
        color: 'white'
    },
    moreDetail: {
        backgroundColor: '#2355FC0F',
        textAlign: 'center',
        padding: '5px 0',
        color: 'blue',
        fontSize: '12px',
        letterSpacing: 1

    }
});

export default useStyles