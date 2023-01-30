using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace testproject.api.Models;

[Table("employee")]
public partial class Employee
{
    [Key]
    public int EmpId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    [ForeignKey(nameof(Role))]
    public int RoleID { get; set; }
    public virtual Role? Role { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string? TelNo { get; set; }
    [ForeignKey(nameof(Manager))]
    public int? ManagerId { get; set; }
    public virtual Manager? Manager { get; set; }
    [ForeignKey(nameof(Department))]
    public int? DeptId { get; set; }
    public virtual Department? Department { get; set; }
    public bool Status { get; set; }
}
