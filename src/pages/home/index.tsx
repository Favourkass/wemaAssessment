import React, { useState } from "react";
import notifications from "../../assets/icons/Alert.png";
import placeholderImage from "../../assets/icons/placeholderImage.png";
import arrowDownArrow from "../../assets/icons/arrowDown.png";
import SearchBar from "../../components/searchInput";
import addIcon from "../../assets/icons/iconAdd.png";
import openActions from "../../assets/icons/iconMore.png";

const Home = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const generateItems = () => {
    const statuses = ["Awaiting approval", "Active", "Deactivated"];
    const items = [];

    for (let i = 1; i <= 30; i++) {
      const randomIndex = Math.floor(Math.random() * statuses.length);
      const randomStatus = statuses[randomIndex];

      items.push({
        firstName: `Temitope`,
        lastName: `Adejumoke`,
        phoneNumber: `+234800 000 0000`,
        partner: `The Place`,
        location: `Festac`,
        status: randomStatus,
      });
    }

    return items;
  };
  const renderItem = (item: any) => {
    let statusStyles = {};

    switch (item.status) {
      case "Active":
        statusStyles = {
          backgroundColor: "rgba(39, 167, 19, 0.10)",
          color: "#27A713",
          padding: 5,
          borderRadius: 10,
        };
        break;
      case "Awaiting approval":
        statusStyles = {
          backgroundColor: "rgba(255, 153, 0, 0.10)",
          color: "#F90",
          padding: 5,
          borderRadius: 10,
        };
        break;
      case "Deactivated":
        statusStyles = {
          backgroundColor: "rgba(255, 0, 0, 0.10)",
          color: "#F00",
          padding: 5,
          borderRadius: 10,
        };
        break;
      default:
        break;
    }
    return (
      <div>
        <div style={styles.lineStyle}></div>
        <div
          key={item.firstName} // Use a unique key for each item
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "2%",
              height: 10,
              width: 10,
              borderRadius: 2,
              border: "1px solid #6C6C6C",
            }}
          ></div>
          <div
            style={{
              // ...styles.labelHeader,
              position: "absolute",
              left: "10%",
            }}
          >
            {item.firstName}
          </div>
          <div
            style={{
              // ...styles.labelHeader,
              position: "absolute",
              left: "20%",
            }}
          >
            {item.lastName}
          </div>
          <div
            style={{
              // ...styles.labelHeader,
              position: "absolute",
              left: "35%",
            }}
          >
            {item.phoneNumber}
          </div>
          <div
            style={{
              // ...styles.labelHeader,
              position: "absolute",
              left: "55%",
            }}
          >
            {item.partner}
          </div>
          <div
            style={{
              // ...styles.labelHeader,
              position: "absolute",
              left: "65%",
            }}
          >
            {item.location}
          </div>
          <div
            style={{
              position: "absolute",
              left: "75%",
              ...statusStyles, // Apply the status-specific styles
            }}
          >
            {item.status}
          </div>

          <div
            style={{
              // ...styles.labelHeader,
              position: "absolute",
              left: "90%",
            }}
          >
            <img src={openActions} alt="Actions" />
          </div>
        </div>
      </div>
    );
  };
  const items = generateItems();
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleFilterClick = (filter: any) => {
    setSelectedFilter(filter);
    setDropdownVisible(false);
    // Additional logic to filter the table based on the selected filter
    // You can update the logic based on your data structure and filtering requirements
    // For now, let's assume you have a filterTable function
    // const filteredItems = filterTable(filter);
    // Update the logic according to your needs
  };

  const displayItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div style={{ backgroundColor: "#F1F1F1" }}>
      <div style={styles.headerWrap}>
        <div style={styles.leftWrap}>
          <label
            style={{
              fontSize: 30,
              fontWeight: "bold",
              display: "block",
              marginRight: 10,
            }}
          >
            Verifiers
          </label>
          <div style={styles.numberWrap}>
            <label>11</label>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={notifications} alt="" style={styles.img} />
          <img src={placeholderImage} alt="" style={styles.img} />
          <img src={arrowDownArrow} alt="" style={styles.img} />
        </div>
      </div>

      <div style={styles.subHeader}>
        <div
          style={{
            height: 30,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "20%",
            alignItems: "center",
            padding: 10,
          }}
          onClick={toggleDropdown}
        >
          <label
            style={{
              fontSize: 15,
              fontWeight: "bold",
              display: "block",
              marginRight: 10,
              cursor: "pointer",
            }}
           
          >
            {selectedFilter}{" "}
            {/* <img src={arrowDownArrow} alt="" style={styles.img} /> */}
          </label>
          {dropdownVisible && (
            <div
              style={{
                position: "absolute",
                top: '22%',
                left: '19.3%',
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                zIndex: 1,
                width: "17%",
              }}
            >
              <div
                style={styles.dropdownItem}
                onClick={() => handleFilterClick("All")}
              >
                All
              </div>
              <div
                style={styles.dropdownItem}
                onClick={() => handleFilterClick("Active")}
              >
                Active Verifiers
              </div>
              <div
                style={styles.dropdownItem}
                onClick={() => handleFilterClick("AwaitingApproval")}
              >
                Awaiting Approval Verifiers
              </div>
              <div
                style={styles.dropdownItem}
                onClick={() => handleFilterClick("Deactivated")}
              >
                Deactivated Verifiers
              </div>
            </div>
          )}
          <img src={arrowDownArrow} alt="" style={styles.img} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "60%",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ width: "45%" }}>
            <SearchBar />
          </div>
          <div style={{ width: "33%", marginLeft: 15 }}>
            <div
              style={{
                backgroundColor: "#039BF0",
                padding: "13px",
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                color: "white",
              }}
            >
              <img src={addIcon} alt="" />
              <label>Add New Verifier</label>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          margin: 30,
          position: "relative",
          height: "100vh",
          paddingTop: 10,
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "2%",
              height: 10,
              width: 10,
              borderRadius: 2,
              border: "1px solid #6C6C6C",
            }}
          ></div>
          <label
            style={{ ...styles.labelHeader, position: "absolute", left: "10%" }}
          >
            First Name
          </label>
          <label
            style={{ ...styles.labelHeader, position: "absolute", left: "20%" }}
          >
            Last Name
          </label>
          <label
            style={{ ...styles.labelHeader, position: "absolute", left: "35%" }}
          >
            Phone Number
          </label>
          <label
            style={{ ...styles.labelHeader, position: "absolute", left: "55%" }}
          >
            Partner
          </label>
          <label
            style={{ ...styles.labelHeader, position: "absolute", left: "65%" }}
          >
            Location
          </label>
          <label
            style={{ ...styles.labelHeader, position: "absolute", left: "75%" }}
          >
            Status
          </label>
          <label
            style={{ ...styles.labelHeader, position: "absolute", left: "90%" }}
          >
            Actions
          </label>
        </div>
        {displayItems.map(renderItem)}
        <div
          style={{
            height: 70,
            backgroundColor: "white",
            width: "78.5%",
            position: "fixed",
            bottom: 0,
            boxShadow: "0px -5px 5px -5px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "25%",
              marginTop: 20,
              marginRight: 10,
              marginLeft: 20,
            }}
          >
            <label style={{ color: "rgba(128, 128, 128, 1)" }}>
              Rows per page
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                border: "1px solid",
                padding: 3,
                width: "25%",
                justifyContent: "space-between",
                marginLeft: 10,
              }}
            >
              <label>10</label>
              <img src={arrowDownArrow} alt="" />
            </div>
          </div>
          <div
            style={{
              position: "fixed",
              bottom: 30,
              right: 50,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: currentPage > 1 ? "#039BF0" : "#CCC",
                marginRight: 10,
                cursor: currentPage > 1 ? "pointer" : "default",
              }}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              Previous
            </div>
            {pageNumbers.map((number) => (
              <div
                key={number}
                style={{
                  color: currentPage === number ? "#039BF0" : "#333",
                  marginRight: 5,
                  cursor: currentPage !== number ? "pointer" : "default",
                }}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </div>
            ))}
            <div
              style={{
                color: currentPage < totalPages ? "#039BF0" : "#CCC",
                marginLeft: 5,
                cursor: currentPage < totalPages ? "pointer" : "default",
              }}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            >
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const styles = {
  img: {
    marginTop: 10,
    marginLeft: 10,
  },
  headerWrap: {
    display: "flex",
    flexDirection: "row" as const,
    marginLeft: 4,
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  leftWrap: {
    display: "flex",
    flexDirection: "row" as const,
    alignItems: "center",
  },
  numberWrap: {
    width: 28,
    height: 28,
    backgroundColor: "#F2FAFF",
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#039BF0",
  },
  subHeader: {
    margin: 30,
    display: "flex",
    flexDirection: "row" as const,
    justifyContent: "space-between",
  },
  labelHeader: {
    fontSize: "16px",
    fontWeight: "700",
  },
  lineStyle: {
    height: "2px",
    backgroundColor: "rgba(235, 239, 242, 1)",
    width: "100%", // Adjust the width as needed
    marginTop: 30,
    marginBottom: 30,
  },
  dropdown: {},
  dropdownItem: {
    padding: "10px",
    cursor: "pointer",
    // borderBottom: "1px solid #ccc",
  },
};

export default Home;
