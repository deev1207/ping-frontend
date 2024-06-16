import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Card({message}){

    
    return(

             <ListItem
          key={message._id}
          disableGutters
          secondaryAction={
            message.createdAt
          }
        >
          <ListItemText primary={message.text} />
        </ListItem>

    )
}