import s from './Search.module.scss'
import { CiSearch } from 'react-icons/ci'

const Search = () => {
  return (
    <div>
      <form className={s.form}>
        <label className={s.label}><CiSearch/></label>
        <input
          className={s.input}
          type="text"
          placeholder='Пошук...'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </form>
    </div>
  )
}

export default Search