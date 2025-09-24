import clsx from 'clsx'
import classes from './Spinner.module.css'

/**
 * @param {object} props
 * @param {number} [props.size]
 */
const Spinner = ({ size = 32, ...others }) => {
  return (
    <div
      className={clsx(classes['spinner-container'], others.className)}
      style={{"--size": `${size / 4}rem`, width: `${size / 4}rem`, height: `${size / 4}rem`}}
    >
      <svg
        className={classes['spinner']}
        viewBox="22 22 44 44"
        style={{ height: 'var(--size)', width: 'var(--size)' }}
      >
        <circle cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6" />
      </svg>
    </div>
  )
}

export default Spinner
