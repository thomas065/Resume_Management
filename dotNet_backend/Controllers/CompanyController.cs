using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using React18_TypeScript_Project.Data;
using React18_TypeScript_Project.Data.Dtos.Company;
using React18_TypeScript_Project.Models;
using System.Linq;

namespace React18_TypeScript_Project.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class CompanyController : ControllerBase
	{
		private readonly ApplicationDbContext _context;
		private readonly IMapper _mapper;

		public CompanyController(ApplicationDbContext context, IMapper mapper)
		{
			_context = context;
			_mapper = mapper;
		}

		// CRUD Operations

		//Create
		[HttpPost]
		[Route("Create")]
		public async Task<IActionResult> CreateCompany([FromBody] CompanyCreateDto dto)
		{
			var newCompany = _mapper.Map<Company>(dto);
			await _context.Companies.AddAsync(newCompany);
			await _context.SaveChangesAsync();

			return Ok("Company created successfully!");
		}

		// Read
		[HttpGet]
		[Route("Get")]
		public async Task<ActionResult<IEnumerable<CompanyGetDto>>> GetCompanies()
		{
			var companies = await _context.Companies.OrderByDescending(q => q.CreatedDate).ToListAsync();
			var convertedCompanies = _mapper.Map<IEnumerable<CompanyGetDto>>(companies);

			return Ok(convertedCompanies);
		}

		// Read (Get Company By ID)

		// Update

		// Delete
	}
}
