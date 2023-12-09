

document.addEventListener("DOMContentLoaded", function () {
  
  const enrolledCourses =
    JSON.parse(localStorage.getItem("enrolledCourses")) || [];
  const enrolledCards = document.getElementById("enrolledCards");

  
  enrolledCourses.forEach((courseId) => {

    if (courseId) {
      const card = document.createElement("div");
      card.classList.add("card");

  
      card.innerHTML = `
                <div>
                    <img src="./images/${courseId}.jpg">
                    <h2>${courseId}</h2>
                    <h5>Start Date: 19-12-2023</h5>
                    <h5>End Date: 15-06-2024</h5>
                </div>
            `;

      enrolledCards.appendChild(card);
    }
  });
});
