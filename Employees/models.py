from django.db import models

class Employees(models.Model):
    name = models.CharField(max_length=255,null=True)
    address = models.CharField(max_length=255,null=True)
    email = models.CharField(max_length=255,null=True)
    Phone = models.CharField(max_length=255,null=True)
    gender = models.CharField(max_length=255,null=True)
    martial_status = models.CharField(max_length=255,null=True)
    Available_Vacation = models.IntegerField(null=True)
    Salary = models.IntegerField(null=True)
    date = models.DateField(max_length=255,null=True)
    approved=models.IntegerField(null=True)

    def __str__(self):
        return self.name


    