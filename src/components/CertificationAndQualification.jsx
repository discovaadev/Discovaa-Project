function CertificationAndQualification({ forIsvProfile }) {
  const certifications = forIsvProfile
    ? [
        ["Qualified Mechanic", "Certified Mechanic"],
        ["Qualified Mechanic", "Certified Mechanic"],
        ["Qualified Mechanic", "Certified Mechanic"],
      ]
    : [
        ["Qualified Plumber", "Qualified Plumber"],
        ["Qualified Plumber", "Qualified Plumber"],
        ["Qualified Plumber", "Qualified Plumber"],
      ];

  return (
    <section>
      <div className="p-9 w-full">
        <h1 className="font-bold text-2xl pl-4">
          Certification and Qualification
        </h1>
        <div className="mt-5 flex items-center text-gray-500 gap-80 ">
          {certifications.map((group, index) => (
            <ul key={index} className="list-disc pl-14">
              {group.map((certification, i) => (
                <li key={i}>{certification}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="border border-gray-[#B0B0B0] w-full h-0 "></div>
    </section>
  );
}

export default CertificationAndQualification;
