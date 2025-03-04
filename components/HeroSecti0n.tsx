 const HeroSection = () => {
    return (
        <section className="bg-gradient-to-b from-[--color-1] to-[#e0e0e0] py-20">
  <div className="container mx-auto text-center px-4">
    {/* Headline */}
    <h1 className="text-5xl font-bold text-[--color-4] mb-4">
      Find Your Dream Job
    </h1>

    {/* Subheadline */}
    <p className="text-xl text-[--color-3] mb-8">
      Search thousands of job opportunities and take the next step in your career.
    </p>

    {/* Search Bar and Filters */}
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Job title, keywords, or company..."
          className="flex-1 p-3 border border-[--color-3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-2]"
        />
        {/* Search Button */}
        <button className="bg-[--color-3] text-[--color-1] px-6 py-3 rounded-lg hover:bg-[--color-2] transition-colors">
          Search
        </button>
      </div>

      {/* Filters */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Job Type Dropdown */}
        <select className="p-3 border border-[--color-3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-2]">
          <option>Job Type</option>
          <option>Full-Time</option>
          <option>Part-Time</option>
          <option>Remote</option>
        </select>

        {/* Location Dropdown */}
        <select className="p-3 border border-[--color-3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-2]">
          <option>Location</option>
          <option>New York</option>
          <option>San Francisco</option>
          <option>Remote</option>
        </select>

        {/* Salary Range Input */}
        <input
          type="text"
          placeholder="Salary Range"
          className="p-3 border border-[--color-3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-2]"
        />

        {/* Category Dropdown */}
        <select className="p-3 border border-[--color-3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-2]">
          <option>Category</option>
          <option>Tech</option>
          <option>Healthcare</option>
          <option>Finance</option>
        </select>
      </div>
    </div>
  </div>
</section>
);
};
export default HeroSection;
