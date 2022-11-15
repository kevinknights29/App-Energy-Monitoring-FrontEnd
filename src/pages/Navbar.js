import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Box from '@mui/material/Box';
import Logo from '../imagenes/Logo1.jpg'
import Calendar from '../imagenes/calendario.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar} from '@fortawesome/free-solid-svg-icons'
import { faChartLine} from '@fortawesome/free-solid-svg-icons'
import { faCommentDots} from '@fortawesome/free-solid-svg-icons'
import { faBookOpenReader} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <nav className="nav">
      <h1 className="Hola">
      <Box
      sx={{
        width: 400,
        height: 40, 
        border: '5px solid blue',
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <header ><img src={Calendar} className="calendar" alt="Calendar"/>   Nombre de la empresa </header>
      </Box>
      </h1>
      
      
      <ul>
      
      <Link to="/" className="site-title">
      <img src={Logo} className="logo" alt="Logo"/>
      </Link>
        <CustomLink to="/Dashboard">
        <FontAwesomeIcon icon={faChartLine} size="3x" />
          </CustomLink>
        <CustomLink to="/Calendario">
        <FontAwesomeIcon icon={faCalendar} size="3x"/>
          </CustomLink>
        <CustomLink to="/Sugerencias">
        <FontAwesomeIcon icon={faCommentDots} size="3x"/>
          </CustomLink>
        <CustomLink to="/Manual">
        <FontAwesomeIcon icon={faBookOpenReader} size="3x"/>
          </CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
