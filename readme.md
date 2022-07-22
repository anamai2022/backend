# Licensed Software
 - Proprietary Software : เป็นกรรมสืทธิของผู้พัฒนาระบบไม่สามารถ คัดลอก เลียนแบบหรือทำซ้ำ หรือจำหน่ายจ่ายแจก
 - setup application
####
```
yarn add core-js element-ui moment @ckeditor/ckeditor5-build-classic @ckeditor/ckeditor5-vue @fullcalendar/bootstrap @fullcalendar/core @fullcalendar/daygrid @fullcalendar/interaction @fullcalendar/list @fullcalendar/timegrid @fullcalendar/vue apexcharts axios bootstrap bootstrap-vue bootstrap-vue-editable-table chart.js chartist echarts  leaflet metismenujs sass sass-loader simplebar-vue sweetalert2 vuelidate vuedraggable vue2-scrollspy vue2-leaflet vue2-google-maps vue2-dropzone vue2-datepicker vue-verification-code-input vue-tinymce-editor vue-switches vue-sweetalert2 vue-slide-bar vue-simple-drawer vue-scrollto vue-number-input-spinner vue-multiselect vue-meta vue-i18n vue-hotel-datepicker vue-form-wizard vue-echarts vue-easy-lightbox vue-cropperjs vue-chartjs vue-chartist  vue-axios-cors vue-apexcharts
```
### Docker 
```
 docker build -t noom1009/yfhs-backend .
 ```
 # docker run
 ```
 docker run -d -p 4000:4000 --name yfhs-backend-container noom1009/yfhs-backend
 ```
 # docker compose 
 ```
 docker-compose up
 ```
 ### Docker Mysql
 ```
 docker pull mysql
 docker run --name=yfhsDB -e MYSQL_ROOT_PASSWORD=Irisgroup -e MYSQL_DATABASE=yfhsApp -p 3306:3306 -d mysql
 docker inspect yfhsDB
 docker exec -it 82d0dbe21d5d bash
 mysql -u root -p
 show databases;
 ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Irisgroup';
 ```
# Get Questionnaire
 http://localhost:4000/questionnaire/
 # Get Answer
 http://localhost:4000/answer/questionnaire/256513682/2565/13682
 # Get Running Number
 http://localhost:4000/score/finddocument/13682/2565
 # Get File Upload Show
 http://localhost:4000/upload/show/256513682/13682/2565/2

 