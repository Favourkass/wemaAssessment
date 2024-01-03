import React from 'react';
import searchIcon from '../../assets/icons/search.png';

const SearchBar: React.FC = () => {
  return (
    <div style={styles.searchWrapper}>
      <img src={searchIcon} alt="Search Icon" style={styles.icon} />
      <input type="text" placeholder="Search..." style={styles.input} />
    </div>
  );
};

const styles = {
  searchWrapper: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    padding: '14px',
  },
  icon: {
    marginRight: '8px',
  },
  input: {
    border: 'none',
    outline: 'none',
    width: '100%',
  },
};

export default SearchBar;
