# Generated by Django 5.2 on 2025-04-24 15:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_post_comment'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='username',
            field=models.CharField(default='', max_length=250),
        ),
    ]
