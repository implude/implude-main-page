
import { Link } from 'react-router-dom'

export default function NewsCard (props) { // props : imgSrc, title1, title2, link, linkMsg, color, isMain
    
    const news = {
        liTitle: {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: `${props.isMain ? '3rem' : '2rem'}`,
            width: '100%',
            textAlign: 'center'
        },
        newsButtonDiv: {
            textAlign: 'center'
        },
        newsButtonSpan: {
            width: '80%',
            background: 'white',
            padding: '1rem 1.5rem',
            position: 'relative',
            top: '4rem',
            borderRadius: '30px',
            color: '#004799',
            fontWeight: '600'
        }
    }

    return (
        <>
            <img src={props.imgSrc} style={
                {
                    width: 'auto',
                    height: '100%'
                }
            } alt="" />
            <div style={news.liTitle}>
                <span style={{color: 'white'}}>{props.title1}</span><br></br>
                <span style={{color: `${props.color}`, fontWeight: 'bold'}}>{props.title2}</span>
                <Link to={props.link}>
                <div style={news.newsButtonDiv}>
                    <span style={news.newsButtonSpan}>{props.linkMsg}</span>
                </div>
                </Link>
            </div>
        </>
    )
}