# Generated by Django 3.2.5 on 2021-07-12 16:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hiking', '0006_auto_20210708_1449'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='diaryentry',
            name='hike_location',
        ),
        migrations.AddField(
            model_name='diaryentry',
            name='hike_address',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='diaryentry',
            name='hike_name',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
