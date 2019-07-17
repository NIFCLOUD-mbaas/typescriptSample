import { Request, Response } from "express";
import employeeServices from "../services/employeeServices";

/**
 * GET /
 * Home page.
 */
export const index = async (req: Request, res: Response) => {
  var employee = await employeeServices.getEmployees()
  res.render("home", {
    title: "Home",
    employee: employee
  });
};

/**
 * POST /
 * Search Employee
 * @param req 
 * @param res 
 */
export const search = async (req: Request, res: Response) => {
  
  let colName = req.body.colName
  let searchCondition = req.body.searchCondition
  let employee:any

  if (colName == 'None') {
    employee = await employeeServices.getEmployees()
  } else {
    employee = await employeeServices.searchByFiled(colName, searchCondition.trim())
  }
  
  res.render("home", {
    title: "Home",
    employee: employee,
    colName: colName,
    searchCondition: searchCondition
  });
}

/**
 * POST /
 * Add new Employee
 * @param req 
 * @param res 
 */
export const newEmployee = async (req: Request, res: Response) => {
  let messages = []
  let name = req.body.name
  let department = req.body.department
  let age = req.body.age
  let gender = req.body.gender
  
  // validate input
  if (name.trim() == '' || department.trim() == '' || !age) {
    messages["errors"] = "errors"
    if (name.trim() == '') {
      messages["message"] = "The Name is not blank."
    }
    if (department.trim() == '') {
      messages["message"] = "The Department is not blank."
    }
    if (!age) {
      messages["message"] = "The Age is not blank."
    }
  } else {
    let newEmployee = await employeeServices.newEmployee(name, department, age, gender)
    if(newEmployee) {
      messages["message"] = "Insert new employee is successfully!"
      messages["errors"] = null
    } else {
      messages["message"] = "Insert new employee have been failure!"
      messages["errors"] = "errors"
    }
  }

  //Get all currently employee
  var employee = await employeeServices.getEmployees()
  res.render("home", {
    title: "Home",
    messages: messages,
    employee: employee
  });

}
/**
 * POST /
 * Update Employee
 * @param req 
 * @param res 
 */
export const updateEmployee = async (req: Request, res: Response) => {
  let messages = []
  let objectId = req.body.objectId
  let name = req.body.name
  let department = req.body.department
  let age = req.body.age
  let gender = req.body.gender
  
  // validate input
  if (name.trim() == '' || department.trim() == '' || !age) {
    messages["errors"] = "errors"
    if (name.trim() == '') {
      messages["message"] = "The Name is not blank."
    }
    if (department.trim() == '') {
      messages["message"] = "The Department is not blank."
    }
    if (!age) {
      messages["message"] = "The Age is not blank."
    }
  } else {
    let newEmployee = await employeeServices.updateEmployee(objectId, name, department, age, gender)
    if(newEmployee) {
      messages["message"] = "Update employee is successfully!"
      messages["errors"] = null
    } else {
      messages["message"] = "Update employee have been failure!"
      messages["errors"] = "errors"
    }
  }

  //Get all currently employee
  var employee = await employeeServices.getEmployees()
  res.render("home", {
    title: "Home",
    messages: messages,
    employee: employee
  });

}
/**
 * POST /
 * Dalete Employee
 * @param req 
 * @param res 
 */
export const deleteEmployee = async (req: Request, res: Response) => {
  let messages = []
  let objectId = req.body.id
  let isDelSuccess = await employeeServices.deleteEmployee(objectId)
  if(isDelSuccess) {
    messages["message"] = "Delete employee is successfully!"
    messages["errors"] = null
  } else {
    messages["message"] = "Delete employee have been failure!"
    messages["errors"] = "errors"
  }
  //Get all currently employee
  var employee = await employeeServices.getEmployees()
  res.render("home", {
    title: "Home",
    messages: messages,
    employee: employee
  });
}
