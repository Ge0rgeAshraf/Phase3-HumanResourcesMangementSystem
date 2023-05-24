from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='employees'),
    path('add', views.add, name='add-Employee'),
    path('submit-vacation/<int:id>', views.add_vaction, name='submit_vacation'),
    path('vacations', views.vacations, name='vacations'),
    path('approved_vacation/<int:id>', views.aprroved_vacation, name='approved_vacation'),
    path('declined_vacation/<int:id>', views.declined_vacation, name='declined_vacation'),
]
