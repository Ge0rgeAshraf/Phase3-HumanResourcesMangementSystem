# Generated by Django 4.2.1 on 2023-05-22 17:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Employees', '0006_alter_employees_approved'),
    ]

    operations = [
        migrations.CreateModel(
            name='vacarion_Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, null=True)),
                ('from_date', models.DateField(max_length=255, null=True)),
                ('to_date', models.DateField(max_length=255, null=True)),
                ('reason', models.CharField(max_length=1000, null=True)),
            ],
        ),
    ]


# python manage.py makemigrations Employees