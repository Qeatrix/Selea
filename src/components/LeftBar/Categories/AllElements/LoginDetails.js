import React, { useState } from "react";
import classNames from "classnames";

import UserData from '../../../../store/data';

import '../../../../assets/css/LoginDetails.css';

import ArrowDown_Icon from "../../../../assets/icons/ArrowDown.svg";
import Copy_Icon from "../../../../assets/icons/Copy.svg";
import Login_Icon from "../../../../assets/icons/Login.svg";
import { observer } from "mobx-react-lite";

const LoginDetails = observer((props) => {
  const [inputValues, setInputValues] = useState({
    id: props.id,
    name: props.name,
    username: props.username,
    password: props.password,
    custom_fields: props.custom_fields,
  });
  const [isHovered, setIsHovered] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event, input) => {
    setInputValues({ ...inputValues, [input]: event.target.value });
  };

  const handleCustomFieldChange = (event, customInput) => {
    setInputValues({ ...inputValues, custom_fields: {
      ...inputValues.custom_fields, [customInput]: event.target.value
    } });
  }

  const handleSave = () => {
    setIsEditing(false);
    UserData.updateExistingData(inputValues.id, inputValues.name, inputValues.username, inputValues.password, inputValues.custom_fields);
  }

  const handleMouseEnter = (inputName) => {
    setIsHovered(inputName);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  console.log(inputValues.id);

  return (
    <>
      <div className="LoginDetails">
        {isEditing === false &&
          <button onClick={() => setIsEditing(true)}>Edit</button>
        } 
        {isEditing === true &&
          <button onClick={handleSave}>Save</button>
        }
        <div className="LoginDetailsName">
          <img src={Login_Icon} alt="Login Icon" />
          <input readOnly={!isEditing}
            type="text"
            value={inputValues.name}
            onChange={(event) => handleChange(event, "name")}
          />
        </div>
        <div className="LoginDetailsContainer">
          <div>
            <label>Login</label>
            <div onMouseEnter={() => handleMouseEnter("username")}
                onMouseLeave={handleMouseLeave} className="LoginDetailsInputContainer">
              <input readOnly={!isEditing}
                type="text"
                value={inputValues.username}
                onChange={(event) => handleChange(event, "username")}

              />
              <button
                className={classNames("LoginDetailsInputMenuButton", {
                  LoginDetailsInputMenuButton_Hovered: isHovered === "username",
                })}
              >
                <img src={ArrowDown_Icon} alt="Menu Icon" />
              </button>
              <button className="LoginDetailsInputCopyButton">
                <img src={Copy_Icon} alt="Copy Icon" />
                <div>Copy</div>
              </button>
            </div>
          </div>
          <div>
            <label>Password</label>
            <div className="LoginDetailsInputContainer">
              <input readOnly={!isEditing}
                type="password"
                value={inputValues.password}
                onChange={(event) => handleChange(event, "password")}
                onMouseEnter={() => handleMouseEnter("password")}
                onMouseLeave={handleMouseLeave}
              />
              <button
                className={classNames("LoginDetailsInputMenuButton", {
                  LoginDetailsInputMenuButton_Hovered: isHovered === "password",
                })}
              >
                <img src={ArrowDown_Icon} alt="Menu Icon" />
              </button>
              <button className="LoginDetailsInputCopyButton">
                <img src={Copy_Icon} alt="Copy Icon" />
              </button>
            </div>
          </div>
          {Object.entries(inputValues.custom_fields).map(([customInput]) => (
            <div key={customInput}>
              <label>{customInput}</label>
              <div className="LoginDetailsInputContainer">
                <input readOnly={!isEditing}
                  type="text"
                  value={inputValues.custom_fields[customInput]}
                  onChange={(event) => handleCustomFieldChange(event, customInput)}
                  onMouseEnter={() => handleMouseEnter(customInput)}
                  onMouseLeave={handleMouseLeave}
                />
                <button
                  className={classNames("LoginDetailsInputMenuButton", {
                    LoginDetailsInputMenuButton_Hovered: isHovered === customInput,
                  })}
                >
                  <img src={ArrowDown_Icon} alt="Menu Icon" />
                </button>
                <button className="LoginDetailsInputCopyButton">
                  <img src={Copy_Icon} alt="Copy Icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});

export default LoginDetails;