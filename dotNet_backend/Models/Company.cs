using React18_TypeScript_Project.Data.Enums;

namespace React18_TypeScript_Project.Models
{
	public class Company : AppUser
	{
        public string? Name { get; set; }

        public CompanySize CompanySize { get; set; }

        // Relational Properties
        public ICollection<Job> Jobs { get; set; } = new HashSet<Job>();
    }
}
