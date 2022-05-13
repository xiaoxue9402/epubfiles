from django.shortcuts import render
from .models import Book
from .serializers import BookSerializer
from rest_framework import viewsets

# Create your views here.
class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()
