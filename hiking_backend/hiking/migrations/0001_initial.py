# Generated by Django 3.2.4 on 2021-06-29 20:05

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='HikeLocation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hike_name', models.CharField(max_length=100)),
                ('hike_address', models.CharField(max_length=100)),
                ('hike_lat', models.DecimalField(decimal_places=20, max_digits=20)),
                ('hike_lng', models.DecimalField(decimal_places=20, max_digits=20)),
            ],
        ),
        migrations.CreateModel(
            name='HikeRecommendation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hike_img', models.CharField(max_length=200)),
                ('weather_rating', models.IntegerField()),
                ('hike_location', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hiking.hikelocation')),
            ],
        ),
        migrations.CreateModel(
            name='DiaryEntry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hike_date', models.DateField(default=datetime.date.today)),
                ('hike_description', models.TextField()),
                ('hike_weather_rating', models.IntegerField()),
                ('hike_location', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='hiking.hikelocation')),
            ],
        ),
    ]
