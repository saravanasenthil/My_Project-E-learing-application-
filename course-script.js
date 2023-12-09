

document.getElementById("enrollButton").addEventListener("click", function () {
  
  const enrolledCourses =
    JSON.parse(localStorage.getItem("enrolledCourses")) || [];

  
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get("courseId");

  
  if (!enrolledCourses.includes(courseId)) {
    
    enrolledCourses.push(courseId);

    
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));

    
    window.location.href = "dashboard.html";
  } else {
    alert("You are already enrolled in this course.");
  }
});
