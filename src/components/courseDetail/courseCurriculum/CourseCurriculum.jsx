import CurriculumItem from "./CurriculumItem";

const CourseCurriculum = () => {
  return (
    <div>
      <CurriculumItem isCompleted={true} />
      <CurriculumItem isCompleted={false} />
      <CurriculumItem isCompleted={true} />
      <CurriculumItem isCompleted={false} />
      <CurriculumItem isCompleted={true} />
      <CurriculumItem isCompleted={false} />
      <CurriculumItem isCompleted={true} />
      <CurriculumItem isCompleted={false} />
    </div>
  );
};

export default CourseCurriculum;
