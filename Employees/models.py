from django.db import models

class Employees(models.Model):
    name = models.CharField(max_length=255, null=True)
    address = models.CharField(max_length=255, null=True)
    email = models.CharField(max_length=255, null=True)
    Phone = models.CharField(max_length=255, null=True)
    gender = models.CharField(max_length=255, null=True)
    martial_status = models.CharField(max_length=255, null=True)
    Available_Vacation = models.IntegerField(null=True)
    Salary = models.IntegerField(null=True)
    date = models.DateField(max_length=255, null=True)
    approved = models.IntegerField(null=True)

class Vacation_Employee(models.Model):
    employee = models.ForeignKey(Employees, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, null=True)
    from_date = models.DateField(max_length=255, null=True)
    to_date = models.DateField(max_length=255, null=True)
    reason = models.CharField(max_length=1000, null=True)
    status=models.CharField(max_length=255,null=True)

    def __str__(self):
        return self.name
