using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace React18_TypeScript_Project.Models
{
	public abstract class AppUser
	{
		[Key]
		public int Id { get; set; }

		public DateTime CreatedDate { get; set; } = DateTime.UtcNow;

		public DateTime UpdatedDate { get; set; } = DateTime.UtcNow;

		public bool IsActive { get; set; } = true; // default value
	}
}
