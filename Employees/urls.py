from django.urls import path
from . import views
urlpatterns = [ path('', views.index, name='employees'),path('add', views.add, name='add-Employee'),]