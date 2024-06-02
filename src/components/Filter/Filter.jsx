import css from './Filter.module.css';
import { Icon } from '../img/Icon';
export const Filter = ({ handleFilter, value }) => (
  <div>
    <label htmlFor="Name" className={css.formLabel}>
      Find contacts by name
    </label>
    <div className={css.boxInput}>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={handleFilter}
        className={css.filterInput}
      />
      <Icon id="search" className={css.iconsInput} />
    </div>
  </div>
);