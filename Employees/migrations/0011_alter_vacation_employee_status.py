# Generated by Django 4.2.1 on 2023-05-23 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Employees', '0010_alter_vacation_employee_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vacation_employee',
            name='status',
            field=models.CharField(max_length=255, null=True),
        ),
    ]