import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import verifiersImg from "../../assets/icons/verifiers.png";
import logoIcon from "../../assets/icons/logoIcon.png";
import deal from '../../assets/icons/Deals.png';
import IconTxn from '../../assets/icons/iconTansactions.png'

// import Users from '../users';

const SideNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (pathname: any) => location.pathname === pathname;
  // eslint-disable-next-line no-unused-vars

  const handleOverviewClick = () => {
    if (!isActive("/")) {
      navigate("/");
    }
  };
  // eslint-disable-next-line no-unused-vars

  // eslint-disable-next-line no-unused-vars
//   const handleReportsClick = () => {
//     if (!isActive("/reports")) {
//       navigate("/reports");
//     }
//   };
//   // eslint-disable-next-line no-unused-vars
//   const handleReportsExternalClick = () => {
//     if (!isActive("/reportsExternal")) {
//       navigate("/reportsExternal");
//     }
//   };
//   const handleTransactionsClick = () => {
//     if (!isActive("/transactions")) {
//       navigate("/transactions");
//     }
//   };
  // eslint-disable-next-line no-unused-vars

  return (
    <div style={{ backgroundColor: "white", width: 250, height:'100vh' }}>

        <img src={logoIcon} style={styles.img} alt=""/>
      
          <div onClick={handleOverviewClick} style={styles.buttonStyles}>
            <div style={styles.sideLine} />
            <img src={verifiersImg} alt="" style={styles.imgTwo}/>
            <label style={{color:'#039BF0', fontSize:15}}>Verifiers</label>
          </div>
          <div style={styles.buttonStyleTwo} >
            
            <img src={deal} alt="" style={styles.imgTwo}/>
            <label style={{color:'black', fontSize:15}}>Deals</label>
          </div>
          <div style={styles.buttonStyleTwo} >
            
            <img src={IconTxn} alt="" style={styles.imgTwo}/>
            <label style={{color:'black', fontSize:15}}>Transactions</label>
          </div>
       
    </div>
  );
};
const styles = {
  buttonStyles: {
    backgroundColor:'#F2FAFF',
    width:'80%',
    display:'flex',
    alignItems:'center',
    height: 48,
    marginTop:20,
    borderRadius:10,
    marginLeft:20,
  },
  img:{
    marginTop:30,
    marginLeft:30,
  },
  sideLine:{
    backgroundColor:'#039BF0',
    width:4,
    height:48,
    borderRadius:10,
  },
  imgTwo:{
    marginLeft:10,
    marginRight:10
  },
  buttonStyleTwo: {
    // backgroundColor:'#F2FAFF',
    width:'80%',
    display:'flex',
    alignItems:'center',
    height: 48,
    marginTop:20,
    borderRadius:10,
    marginLeft:20,
  },
};

export default SideNav;
