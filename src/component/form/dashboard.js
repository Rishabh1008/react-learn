import React from "react";

function Dashboard(props) {
    const {handleDelete, handleModalShow, formData } = props;

    
    
  return (
    <table>
      <thead>
        <tr>
          <th>Student Id</th>
          <th>Student Name</th>
        </tr>
      </thead>
      <tbody>
        {formData.map((formData, index) => {
          return (
            <tr key={`data-${index}`}>
              <td>{formData.studentId}</td>
              <td>{formData.studentName}</td>
              <td>
                <input
                  type="button"
                  value="delete"
                  onClick={() => handleDelete(index)}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="update"
                  onClick={() => handleModalShow(index)}
                />
              </td>
            </tr>
          );
        })}

      </tbody>
    </table>
    
    
  );
}
export default Dashboard;
