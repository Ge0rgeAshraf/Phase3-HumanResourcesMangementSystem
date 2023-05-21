from django.db import models

class Employees(models.Model):
    firstname = models.CharField(max_length=255,null=True)
    address = models.CharField(max_length=255,null=True)
    phone = models.CharField(max_length=255,null=True)
    gender = models.CharField(max_length=255,null=True)
    martial_status = models.CharField(max_length=255,null=True)
    Avaliable_vacation = models.IntegerField(null=True)
    approved = models.IntegerField(null=True)
    salary = models.IntegerField(null=True)
    birthday = models.DateField(max_length=255,null=True)
    def _str_(self):
        return self.firstname