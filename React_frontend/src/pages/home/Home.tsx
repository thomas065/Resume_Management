import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Fab,
    Fade,
    Tooltip,
    Typography,
} from '@mui/material';
import './home.scss';
import logo from '../../images/Job hunt-amico.png';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const redirect = useNavigate();

    return (
        <div className='card'>
            <Card variant='outlined' sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <Tooltip
                        title='Job illustrations by Storyset'
                        arrow
                        placement='top'
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                    >
                        <CardMedia
                            component='img'
                            height='275'
                            image={logo}
                            alt='storySet-Image'
                        />
                    </Tooltip>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            Welcome to the Resume Management Resource React-App
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            This is a Resume Management Resouce Builder, built
                            in React-18 for the frontend and Asp.Net as the
                            backend. This is a simple CRUD operations of grids
                            to hold on to job resource data and pdf files for
                            their respected roles. Try it out!
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Fab
                        size='large'
                        color='secondary'
                        className='fw-bold'
                        onClick={() => redirect('/companies')}
                    >
                        Start
                    </Fab>
                </CardActions>
            </Card>
        </div>
    );
};

export default Home;
