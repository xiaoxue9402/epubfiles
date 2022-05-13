from django.contrib import admin
from .models import Book

class BookAdmin(admin.ModelAdmin):
    library = ('title', 'author', 'url')

    admin.site.register(Book)


# Register your models here.
