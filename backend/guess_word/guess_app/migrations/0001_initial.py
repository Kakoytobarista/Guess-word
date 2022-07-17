# Generated by Django 4.0.6 on 2022-07-17 19:29

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Word',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('word', models.CharField(max_length=13, verbose_name='word')),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False)),
            ],
        ),
    ]
