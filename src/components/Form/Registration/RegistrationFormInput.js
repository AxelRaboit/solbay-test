import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "../InputForm.scss";
library.add(fas)

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { errorMessage, onChange, id, ...inputProps } = props;
    
    const handleFocus = () => {
      setFocused(true);
    };
  
    return (
      <div className="formInput">
        <div className="containerInput">
          <FontAwesomeIcon className="inputIcon" icon={['fas', inputProps.icon]}></FontAwesomeIcon>
          <div className='inputWithMessage'>
            <input
              {...inputProps}
              onChange={onChange}
              onBlur={handleFocus}
              autoComplete='off'
              onFocus={() =>
                inputProps.name === "confirmPassword" && setFocused(true)
              }
              focused={focused.toString()}
            />
            <p className="errorMessage">{errorMessage}</p>
          </div>
        </div>
      </div>
    );
  };

export default FormInput;
