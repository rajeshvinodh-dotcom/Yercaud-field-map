# Yercaud Field Map v2

This version is designed for a Yercaud health/village field-map workflow.

Verified source structure used:
- Salem District Administration lists Yercaud Block with 9 Village Panchayats.
- Salem district health sample-collection page lists Nagalur as Additional PHC, Valavanthi as CHC (UG PHC/Main PHC), and Manjakuttai as Additional PHC.
- Tamil Nadu Engineering Admissions 2026 school-block information identifies key government schools including GHSS Yercaud, GHS Nagalur, GHS Vellakkadai, GTR High School Semmanatham, GTR Middle School Vazhavanthi and Eklavya Model Residential School Yercaud.

IMPORTANT:
The village points in this demo are approximate display points, not survey-grade GIS coordinates. Facility entries without coordinates are intentionally not placed on the map. For official departmental use, replace them with GPS coordinates collected/verified in the field.

## Next data-entry format

For every facility add:
name, name_ta, category, latitude/longitude, panchayat, hamlet, phone, photo, remarks.

Categories:
village, health, school, anganwadi, oht, fogging

## GitHub Pages
Upload the project to a GitHub repository and enable Settings -> Pages -> Deploy from branch -> main -> /root.
