# SCROLL
The length of the menu was calculated using **getBoundingClientRect()** method. According to this length, the container length is automatically increased and decreased. The container height is dynamically adjusted when a new element is added to or removed from the menu section.

**pageYOffset** is a read-only window property that returns the number of pixels the document has been scrolled vertically. The navigation bar is fixed according to this pixel value.

When the menu is clicked using the **slice** method, the id information is obtained. By using this id information, the desired element is reached. The highest point of this element is reached with the **offsetTop** method. Accordingly, the scrolling process takes place.

![project1](images/project.gif)
![project2](images/project-2.gif)

## Used Technologies
* <img align="left" height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png">

* <img align="left" style="margin-right: 3px" height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png">

* <img align="left" style="margin-right: 3px" height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png">

## Installation
First clone the project.
```
git clone https://github.com/saglamburcu/scroll-project.git
```

## Usage
After cloning the project, open it in Visual Studio Code.
```
cd scroll-project
code .
```

