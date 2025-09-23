import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infobox.css"

export default function Infobox({info}) {

    let Img_url = "https://images.unsplash.com/photo-1611928482473-7b27d24eab80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let Cool ="https://images.unsplash.com/photo-1709656897297-8d9c5acd07af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let Hot ="https://images.unsplash.com/photo-1534126163360-0810adcaef3e?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let Rainy ="https://images.unsplash.com/photo-1552486289-7a93ac6d69a5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <div className='InfoBox'>
            <div className='CardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? Rainy : info.temp > 15 ? Hot : Cool }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.City}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>

                            <div>Temperature :  {info.temp}&deg;C</div>
                            <div>Feels like : Temperature Feels like {info.feels_like}&deg;C</div>
                            <div>Humidity : {info.humidity}</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}