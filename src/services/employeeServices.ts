import BaseService from "./baseservice";

class EmployeeServices extends BaseService {
    constructor () {
        super()
    }

    /**
     * Get all Employee
     */
    public async getEmployees() {
        let employeeObject = this.ncmb.DataStore("Employee")
        let object = {}
        await employeeObject.fetchAll()
        .then(function(results) {
            object = results;
        })
        .catch(function(err){
            console.log(err);
        });
        return object
    }

    /**
     * Search Employee by collumn name
     */
    public async searchByFiled(colName: string, condition: string) {
        let employeeObject = this.ncmb.DataStore("Employee")
        let object = {}
        await employeeObject.equalTo(colName, condition)
        .fetchAll()
        .then(function(results) {
            object = results;
        })
        .catch(function(err){
            console.log(err);
        });
        return object
    }

    /**
     * Add new Employee
     */
    public async newEmployee(name: string, department: string, age: string, gender: string) {
        let employeeObject = this.ncmb.DataStore("Employee")
        let object = {}
        let emp = new employeeObject();
        await emp.set("Name", name)
        .set("Department", department)
        .set("Age", age)
        .set("Gender", gender)
        .save()
        .then(function(results){
            object = results;
        }).catch(function(err){
            console.log(err);
        })
        return object
    }

    /**
     * Update Employee
     */
    public async updateEmployee(objectId:string, name: string, department: string, age: string, gender: string) {
        let employeeObject = this.ncmb.DataStore("Employee")
        let object = {}
        let emp = new employeeObject();
        await emp
        .set("objectId", objectId)
        .set("Name", name)
        .set("Department", department)
        .set("Age", age)
        .set("Gender", gender)
        .update()
        .then(function(results){
            object = results;
        }).catch(function(err){
            console.log(err);
        })
        return object
    }

    /**
     * Delete Employee
     */
    public async deleteEmployee(objectId: string) {
        let employeeObject = this.ncmb.DataStore("Employee")
        let object = {}
        let emp = new employeeObject();
        emp.set("objectId", objectId);
        await emp.delete()
        .then(function(results){
            object = results;
        })
        .catch(function(err){
            console.log(err);
        })
        return object
    }
}
export default new EmployeeServices()