import { Link } from 'react-router-dom'

export default function NewsCard(props) {
  // props : imgSrc, title1, title2, link, linkMsg, color, isMain

  const news = {
    liTitle: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: `${props.isMain ? '3rem' : '2rem'}`,
      width: '100%',
      textAlign: 'center',
      zIndex: '2',
    },
    newsButtonDiv: {
      textAlign: 'center',
      zIndex: '2',
    },
    newsButtonSpan: {
      background: 'white',
      padding: '1rem 1.5rem',
      borderRadius: '30px',
      color: '#004799',
      fontWeight: '600',
      fontSize: `${props.isMain ? '2rem' : '1rem'}`,
      zIndex: '2',
    },
  }

  return (
    <>
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          zIndex: '1',
          position: 'absolute',
          opacity: '0.6',
        }}
      ></div>
      <img
        src={props.imgSrc}
        style={{
          width: 'auto',
          height: '100%',
        }}
        alt=""
      />
      <div style={news.liTitle}>
        <span style={{ color: 'white' }}>{props.title1}</span>
        <br></br>
        <span style={{ color: `${props.color}`, fontWeight: 'bold' }}>{props.title2}</span>
        <Link to={props.link} style={
            {
              height: 'auto',
              display: 'inline-block',
              position: 'relative',
              top: props.isMain ? '4rem' : '2.7rem'
            }
          }>
          <div style={news.newsButtonDiv}>
            <span style={news.newsButtonSpan}>{props.linkMsg}</span>
          </div>
        </Link>
      </div>
    </>
  )
}
