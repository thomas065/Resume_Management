namespace React18_TypeScript_Project.Models
{
	public class Candidate : AppUser
	{
        public string? FirstName { get; set; }
		public string? LastName { get; set; }
		public string? Email { get; set; }
		public string? Phone { get; set; }
		public string? CoverLetter { get; set; }
		public string? ResumeUrl { get; set; }

		// Relation properties
		public int JobId { get; set; }
        public virtual Job? Job { get; set; }
    }
}
