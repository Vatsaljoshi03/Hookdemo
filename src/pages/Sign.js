import React, { useState } from 'react';


function App() {
  const [formData, setFormData] = useState({
    text: '',
    email: '',
    image: null,
    password: '',
    checkbox: false,
    radio: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    let error = '';
    
    switch(name) {
      case 'text':
        error = value.trim() && /^[a-zA-Z0-9\s]+$/.test(value) ? '' : 'Text must be alphanumeric';
        break;
      case 'email':
        error = value.trim() && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ? '' : 'Invalid email format';
        break;
      case 'image':
        error = files && files[0] && !['image/jpeg', 'image/png', 'image/gif'].includes(files[0].type) ? 'Please upload a valid image file' : '';
        break;
      case 'password':
        error = value.length < 6 ? 'Password must be at least 6 characters long' : '';
        break;
      case 'checkbox':
        error = !checked ? 'Checkbox must be checked' : '';
        break;
      case 'radio':
        error = !value ? 'Please select an option' : '';
        break;
      default:
        break;
    }
    
    setErrors({
      ...errors,
      [name]: error
    });

    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    
    Object.values(formData).forEach((value, index) => {
      const name = Object.keys(formData)[index];
      
      let error = '';
      
      switch(name) {
        case 'text':
          error = value.trim() && /^[a-zA-Z0-9\s]+$/.test(value) ? '' : 'Text must be alphanumeric';
          break;
        case 'email':
          error = value.trim() && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ? '' : 'Invalid email format';
          break;
        case 'image':
          error = value && !['image/jpeg', 'image/png', 'image/gif'].includes(value.type) ? 'Please upload a valid image file' : '';
          break;
        case 'password':
          error = value.length < 6 ? 'Password must be at least 6 characters long' : '';
          break;
        case 'checkbox':
          error = !value ? 'Checkbox must be checked' : '';
          break;
        case 'radio':
          error = !value ? 'Please select an option' : '';
          break;
        default:
          break;
      }

      if (error) {
        valid = false;
      }

      setErrors({
        ...errors,
        [name]: error
      });
    });

    if (valid) {
      console.log(formData);
    }
  };

  return (
    <div className="container">
      <h1>React Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Text:</label>
          <input 
            type="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            className="form-control"
          />
          {errors.text && <span className="error">{errors.text}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input 
            type="file"
            name="image"
            onChange={handleChange}
            className="form-control"
          />
          {errors.image && <span className="error">{errors.image}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>
            <input 
              type="checkbox"
              name="checkbox"
              checked={formData.checkbox}
              onChange={handleChange}
            />
            Checkbox
          </label>
          {errors.checkbox && <span className="error">{errors.checkbox}</span>}
        </div>
        <div className="form-group">
          <label>
            <input 
              type="radio"
              name="radio"
              value="option1"
              checked={formData.radio === 'option1'}
              onChange={handleChange}
            />
            Option 1
          </label>
          <label>
            <input 
              type="radio"
              name="radio"
              value="option2"
              checked={formData.radio === 'option2'}
              onChange={handleChange}
            />
            Option 2
          </label>
          {errors.radio && <span className="error">{errors.radio}</span>}
        </div>
        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
