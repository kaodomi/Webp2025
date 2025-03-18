from django.urls import path
from . import views


'''urlpatterns =[
    path('add', views.add_post, name='add_post'),
    path('list', views.list_post, name='list_post'),
]'''

urlpatterns = [
    path('addcourse', views.add_course, name='add_course'),
    path('courselist', views.course_list, name='course_list'),
]