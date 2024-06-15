import { useState } from 'react';
import style from './grid-container.module.css';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import { useLocation } from 'react-router-dom';
import RestoreIcon from '@mui/icons-material/RestoreOutlined'
import DeleteIcon from '@mui/icons-material/DeleteOutline'

export default function MyGridContainer(props) {
  const [isHovered, onHover] = useState(false);
  const location = useLocation().pathname;
  return (
    <div className={style.grid}>
      {props.images.map((m, index) => (
      <div id='gridItem' className={`${props.isMasonry ? style.masonryItem : style.gridItem} 
      ${props.hasActions && style.actionHover}`} 
        key={index} onMouseOver={()=>onHover(true)} onMouseLeave={()=>onHover(false)}>
        <img src={m} alt="" />
        {isHovered && location == '/trash' && (<>
          <div className={`${style.actionsContainer}`}>
            <IconButton>
              <RestoreIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </div>
        </>)}
      </div>))}
    </div>
  )
}

MyGridContainer.propTypes = {
  images: PropTypes.array.isRequired,
  isMasonry: PropTypes.bool.isRequired,
  hasActions: PropTypes.bool.isRequired,
}