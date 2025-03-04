import HeroSection from '@/components/HeroSecti0n';
import JobsListing from '@/pages/jobs/index';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Recent Job Openings</h2>
        <JobsListing />
      </div>
    </div>
  );
};

export default HomePage;